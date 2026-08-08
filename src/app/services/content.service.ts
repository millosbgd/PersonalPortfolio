import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, computed, signal } from '@angular/core';
import { LanguageCode, SiteContent } from '../models/content.model';
import { CONTENT } from '../shared/content';

const LANGUAGE_KEY = 'advisory-language';
const SUPPORTED_LANGUAGES: LanguageCode[] = ['sr', 'en', 'ru'];

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly activeLanguage = signal<LanguageCode>(this.resolveInitialLanguage());

  readonly language = this.activeLanguage.asReadonly();
  readonly content = computed<SiteContent>(() => CONTENT[this.activeLanguage()]);

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.applyDocumentMeta(this.content());
  }

  setLanguage(language: LanguageCode): void {
    this.activeLanguage.set(language);
    localStorage.setItem(LANGUAGE_KEY, language);
    history.replaceState(null, '', `/${language}`);
    this.applyDocumentMeta(this.content());
  }

  isSupportedLanguage(value: string | null | undefined): value is LanguageCode {
    return SUPPORTED_LANGUAGES.includes(value as LanguageCode);
  }

  private resolveInitialLanguage(): LanguageCode {
    const pathLanguage = window.location.pathname.split('/').filter(Boolean)[0];
    if (this.isSupportedLanguage(pathLanguage)) {
      return pathLanguage;
    }

    const storedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (this.isSupportedLanguage(storedLanguage)) {
      return storedLanguage;
    }

    return 'sr';
  }

  private applyDocumentMeta(content: SiteContent): void {
    this.document.documentElement.lang = content.lang;
    this.document.title = content.meta.title;
    this.setMeta('description', content.meta.description);
    this.setMeta('og:title', content.meta.title, 'property');
    this.setMeta('og:description', content.meta.description, 'property');
  }

  private setMeta(name: string, content: string, attribute: 'name' | 'property' = 'name'): void {
    const selector = `meta[${attribute}="${name}"]`;
    let element = this.document.head.querySelector<HTMLMetaElement>(selector);

    if (!element) {
      element = this.document.createElement('meta');
      element.setAttribute(attribute, name);
      this.document.head.appendChild(element);
    }

    element.content = content;
  }
}
