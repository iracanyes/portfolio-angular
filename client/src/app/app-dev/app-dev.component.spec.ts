import { TestBed } from '@angular/core/testing';
import { AppDevComponent } from './app-dev.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppDevComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppDevComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'portfolio'`, () => {
    const fixture = TestBed.createComponent(AppDevComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('portfolio');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppDevComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('portfolio app is running!');
  });
});
