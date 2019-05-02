import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent(pagetitle, meta) {
        this.pagetitle = pagetitle;
        this.meta = meta;
        this.title = 'Privacy Policy | Sports Social';
        this.description = "Get Sports Social's privacy policy. If you have any questions related to this policy, please feel free to contact us. We will love t o hear from you";
        this.keywords = "Privacy Policy Sports Social";
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        this.pagetitle.setTitle(this.title);
        this.meta.updateTag({ name: 'title', content: this.title });
        this.meta.updateTag({ name: 'description', content: this.description });
        this.meta.updateTag({ name: 'keywords', content: this.keywords });
        this.meta.updateTag({ property: 'og:title', content: this.title });
        this.meta.updateTag({ property: 'og:description', content: this.description });
        this.meta.updateTag({ property: 'og:keywords', content: this.keywords });
    };
    PrivacyPolicyComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-privacy-policy',
            templateUrl: './privacy-policy.component.html',
            styleUrls: ['./privacy-policy.component.css'],
            encapsulation: ViewEncapsulation.Emulated
        }),
        tslib_1.__metadata("design:paramtypes", [Title,
            Meta])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());
export { PrivacyPolicyComponent };
//# sourceMappingURL=privacy-policy.component.js.map