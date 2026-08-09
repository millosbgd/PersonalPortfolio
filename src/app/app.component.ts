import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContentService } from './services/content.service';
import { LanguageCode } from './models/content.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly contentService = inject(ContentService);
  private readonly formBuilder = inject(FormBuilder);

  readonly languages: LanguageCode[] = ['sr', 'en', 'ru'];
  readonly content = this.contentService.content;
  readonly currentLanguage = this.contentService.language;
  readonly currentYear = new Date().getFullYear();
  readonly mobileMenuOpen = signal(false);
  readonly submitState = signal<'idle' | 'submitting' | 'success' | 'error'>('idle');
  readonly isSubmitting = computed(() => this.submitState() === 'submitting');
  readonly isSuccess = computed(() => this.submitState() === 'success');
  readonly isError = computed(() => this.submitState() === 'error');

  readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    company: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', Validators.required],
    website: [''],
  });

  setLanguage(language: LanguageCode): void {
    this.contentService.setLanguage(language);
    this.mobileMenuOpen.set(false);
  }

  closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  toggleMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  submitContact(): void {
    if (this.isSubmitting()) {
      return;
    }

    this.submitState.set('idle');

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.submitState.set('error');
      return;
    }

    if (this.contactForm.controls.website.value) {
      this.submitState.set('success');
      return;
    }

    const payload = this.contactForm.getRawValue();
    this.submitState.set('submitting');

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Contact request failed');
        }

        this.submitState.set('success');
        this.contactForm.reset();
      })
      .catch(() => {
        this.submitState.set('error');
      });
  }
}
