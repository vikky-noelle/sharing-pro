import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
var TermsAndConditionComponent = /** @class */ (function () {
    function TermsAndConditionComponent(pagetite, meta) {
        this.pagetite = pagetite;
        this.meta = meta;
        this.title = "Terms of use | Sports Social";
        this.description = "To all the users living in India, our terms and conditions are in compliance with user agreement, privacy policy and all other incorporated policies";
        this.keywords = "Terms of Service Sports Social,Terms and Conditions Sports Social,User agreement Sports Social";
        this.termsOfServices = [
            'Basic Terms',
            'Privacy',
            'Content of service',
            'Your Rights',
            'Your license to use service',
            'Sports Social Right',
            'Restrictions on content and use of the services',
            'Copyright Policy',
            'Ending these terms',
            'Disclaimer & Liability',
            'Entire Agreement'
        ];
    }
    TermsAndConditionComponent.prototype.ngOnInit = function () {
        this.pagetite.setTitle(this.title);
        this.meta.updateTag({ name: 'title', content: this.title });
        this.meta.updateTag({ name: 'description', content: this.description });
        this.meta.updateTag({ name: 'keywords', content: this.keywords });
        this.meta.updateTag({ property: 'og:title', content: this.title });
        this.meta.updateTag({ property: 'og:keywords', content: this.keywords });
        this.meta.updateTag({ property: 'og:description', content: this.description });
    };
    TermsAndConditionComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-terms-and-condition',
            templateUrl: './terms-and-condition.component.html',
            styleUrls: ['./terms-and-condition.component.css'],
            encapsulation: ViewEncapsulation.Emulated
        }),
        tslib_1.__metadata("design:paramtypes", [Title,
            Meta])
    ], TermsAndConditionComponent);
    return TermsAndConditionComponent;
}());
export { TermsAndConditionComponent };
//# sourceMappingURL=terms-and-condition.component.js.map