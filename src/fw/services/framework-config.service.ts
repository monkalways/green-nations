import { Injectable } from '@angular/core';

export interface IconFile {
  imageFile: string;
  alt: string;
  link: string;
}

export interface FrameworkConfigSettings {
  showLanguageSelector?: boolean;
  showUserControls?: boolean;
  showStatusBar?: boolean;
  showStatusBarBreakpoint?: number;
  socialIcons?: Array<IconFile>;
}

@Injectable()
export class FrameworkConfigService {

  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakpoint = 0;
  socialIcons = new Array<IconFile>();

  configure(settings: FrameworkConfigSettings) : void {
    Object.assign(this, settings);
  }

}
