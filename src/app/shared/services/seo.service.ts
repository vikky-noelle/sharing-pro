import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private meta: Meta) { }

  generateTags(config) {
    // default values
    config = { 
      title: 'Sports Social: Making it easier to play around', 
      description: 'My SEO friendly Angular Component', 
      keywords:'ss,phase1 , gurugram, haryana,india'
    }

    this.meta.updateTag({ name: 'title', content: config.title });
    this.meta.updateTag({ name: 'keywords', content: config.keywords });
    this.meta.updateTag({ name: 'description', content: config.description});
  
    this.meta.updateTag({ property: 'og:title', content: config.title});
    this.meta.updateTag({ property: 'og:keywords', content: config.keywords });
    this.meta.updateTag({ property: 'og:description', content: config.description });
  }

}
