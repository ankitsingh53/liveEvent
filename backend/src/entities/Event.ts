import { time } from "node:console";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("events")
export class Event {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar", length:200})
    title!: string;

    @Column({type: "varchar"})
    summary!: string;

    @CreateDateColumn()
    date!: Date;

    @Column({type:'time'})
    start_time!: string;

    @Column({type: 'time'})
    end_time!: string;
}