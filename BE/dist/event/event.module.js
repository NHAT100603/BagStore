"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const event_schema_1 = require("./event.schema");
const event_service_1 = require("./event.service");
const event_controller_1 = require("./event.controller");
const product_module_1 = require("../product/product.module");
const event_cpanel_controller_1 = require("./event.cpanel.controller");
let EventModule = class EventModule {
};
exports.EventModule = EventModule;
exports.EventModule = EventModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: Event.name, schema: event_schema_1.EventSchema },
            ]),
            product_module_1.ProductModule
        ],
        controllers: [event_controller_1.EventController, event_cpanel_controller_1.EventsCpanelController],
        providers: [event_service_1.EventService],
        exports: [event_service_1.EventService],
    })
], EventModule);
//# sourceMappingURL=event.module.js.map