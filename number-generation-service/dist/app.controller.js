"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberGenerationController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let NumberGenerationController = class NumberGenerationController {
    constructor(numberGenerationService) {
        this.numberGenerationService = numberGenerationService;
    }
    async generateNumbers(start, end) {
        const startNum = parseInt(start, 10) || 1;
        const endNum = parseInt(end, 10) || 100;
        if (isNaN(startNum) || isNaN(endNum)) {
            return 'Invalid start or end number provided';
        }
        await this.numberGenerationService.generateAndSendNumbers(startNum, endNum);
        return 'Numbers generated and sent for processing.';
    }
};
exports.NumberGenerationController = NumberGenerationController;
__decorate([
    (0, common_1.Get)('generate-numbers'),
    __param(0, (0, common_1.Query)('start')),
    __param(1, (0, common_1.Query)('end')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], NumberGenerationController.prototype, "generateNumbers", null);
exports.NumberGenerationController = NumberGenerationController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.NumberGenerationService])
], NumberGenerationController);
//# sourceMappingURL=app.controller.js.map