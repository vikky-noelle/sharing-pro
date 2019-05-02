import { RouterModule } from '@angular/router';
import { GlobalNewsFeedComponent } from './global-news-feed.component';
var News_Routes = [
    {
        path: '',
        component: GlobalNewsFeedComponent
    }
];
export var NewsRoutes = RouterModule.forChild(News_Routes);
//# sourceMappingURL=global-news-feed.routes.js.map