var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { time } from "node:console";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
let Event = class Event {
    id;
    title;
    summary;
    date;
    start_time;
    end_time;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Event.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", length: 200 }),
    __metadata("design:type", String)
], Event.prototype, "title", void 0);
__decorate([
    Column({ type: "varchar" }),
    __metadata("design:type", String)
], Event.prototype, "summary", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Event.prototype, "date", void 0);
__decorate([
    Column({ type: 'time' }),
    __metadata("design:type", String)
], Event.prototype, "start_time", void 0);
__decorate([
    Column({ type: 'time' }),
    __metadata("design:type", String)
], Event.prototype, "end_time", void 0);
Event = __decorate([
    Entity("events")
], Event);
export { Event };
//# sourceMappingURL=Event.js.map