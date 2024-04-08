
export class UrlService {
  static readonly API_VERSION = 'v1';
  static readonly BASE_URL = 'https://digitcard.fotsoclaude.com';
  static readonly API_URL = this.BASE_URL + '/api/' +this.API_VERSION;
  constructor() { }
}
