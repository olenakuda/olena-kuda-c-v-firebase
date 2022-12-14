import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EducationalInstitution } from './educational-institution';
import { Job } from './job';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'olena-kuda-c-v';
  language!: string;
  educationalInstitutionsCurrent!: EducationalInstitution[];
  jobsCurrent!: Job[];
  skillsCurrent!: string[];
  hobbiesCurrent!: string[];
  en: string = 'en';
  de: string = 'de';

  constructor(public translate: TranslateService) {
    this.language = this.de;
    translate.addLangs([this.en, this.de]);
    translate.setDefaultLang(this.en);
    this.getSkills();
    this.getJobs();
    this.getEducationalInstitutions();
    this.getHobbies();
  }

  translateLanguageTo(language: string) {
    this.translate.use(language);
    if (language === this.de) {
      this.language = this.en;
    } else {
      this.language = this.de;
    }
    this.getSkills();
    this.getJobs();
    this.getEducationalInstitutions();
    this.getHobbies();
  }

  getSkills() {
    this.translate.get(['skills']).subscribe((results) => {
      this.skillsCurrent = results['skills'];
    });
  }

  getJobs() {
    this.translate.get(['JOBS']).subscribe((translations) => {
      this.jobsCurrent = translations['JOBS'];
    });
  }

  getEducationalInstitutions() {
    this.translate.get(['educationalInstitutions']).subscribe((results) => {
      this.educationalInstitutionsCurrent = results['educationalInstitutions'];
    });
  }

  getHobbies() {
    this.translate.get(['hobbies']).subscribe((results) => {
      this.hobbiesCurrent = results['hobbies'];
    });
  }
}
