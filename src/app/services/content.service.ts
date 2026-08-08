import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, computed, signal } from '@angular/core';
import { LanguageCode, SiteContent } from '../models/content.model';
import { CONTENT } from '../shared/content';

const LANGUAGE_KEY = 'advisory-language';
const SUPPORTED_LANGUAGES: LanguageCode[] = ['sr', 'en', 'ru'];
const SITE_URL = 'https://novakovicadvisory.com';
const OG_IMAGE_URL = `${SITE_URL}/images/og-image.jpg`;

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
    this.setMeta('robots', 'index, follow');
    this.setMeta('og:title', content.meta.title, 'property');
    this.setMeta('og:description', content.meta.description, 'property');
    this.setMeta('og:type', 'website', 'property');
    this.setMeta('og:site_name', 'Novaković Advisory', 'property');
    this.setMeta('og:url', this.localizedUrl(content.lang), 'property');
    this.setMeta('og:image', OG_IMAGE_URL, 'property');
    this.setMeta('og:image:width', '1200', 'property');
    this.setMeta('og:image:height', '630', 'property');
    this.setMeta('twitter:card', 'summary_large_image');
    this.setMeta('twitter:title', content.meta.title);
    this.setMeta('twitter:description', content.meta.description);
    this.setMeta('twitter:image', OG_IMAGE_URL);
    this.setCanonical(content.lang);
    this.setAlternateLinks();
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

  private localizedUrl(language: LanguageCode): string {
    return `${SITE_URL}/${language}`;
  }

  private setCanonical(language: LanguageCode): void {
    this.setLink('canonical', this.localizedUrl(language));
  }

  private setAlternateLinks(): void {
    SUPPORTED_LANGUAGES.forEach((language) => {
      this.setLink('alternate', this.localizedUrl(language), language);
    });
    this.setLink('alternate', this.localizedUrl('sr'), 'x-default');
  }

  private setLink(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
    let element = this.document.head.querySelector<HTMLLinkElement>(selector);

    if (!element) {
      element = this.document.createElement('link');
      element.rel = rel;
      if (hreflang) {
        element.hreflang = hreflang;
      }
      this.document.head.appendChild(element);
    }

    element.href = href;
  }
}
