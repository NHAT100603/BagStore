"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("./user/user.module");
const order_module_1 = require("./order/order.module");
const brand_module_1 = require("./brand/brand.module");
const category_module_1 = require("./category/category.module");
const user_module_2 = require("./userInfo/user.module");
const product_module_1 = require("./product/product.module");
const comment_module_1 = require("./comment/comment.module");
const promotion_module_1 = require("./promotion/promotion.module");
const color_module_1 = require("./colorProduct/color.module");
const size_module_1 = require("./size/size.module");
const banner_module_1 = require("./banner/banner.module");
const event_module_1 = require("./event/event.module");
const payment_module_1 = require("./paymentMethod/payment.module");
const notifi_module_1 = require("./notification/notifi.module");
const auth_module_1 = require("./auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("./auth/constants");
const mongoose = require('mongoose');
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://nhatnam:100603@cluster0.lledcu9.mongodb.net/BagStore?retryWrites=true&w=majority'),
            user_module_1.UserModule, user_module_2.UserInfoModule, comment_module_1.CommentModule, brand_module_1.BrandModule, category_module_1.CategoryModule, product_module_1.ProductModule, promotion_module_1.PromotionModule,
            order_module_1.OrderModule, color_module_1.ColorModule, size_module_1.SizeModule, banner_module_1.BannerModule, event_module_1.EventModule, payment_module_1.PaymentModule, notifi_module_1.NotificationModule, auth_module_1.AuthModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '1d' },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map