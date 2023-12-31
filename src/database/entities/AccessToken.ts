import {
  Entity,
  PrimaryColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { UserRole } from "./UserRole";



@Entity("AccessToken")
export class ExpiredToken extends BaseEntity {
  @PrimaryColumn({ type: "varchar", length: 64 })
  public id: string;

  @Column({ type: "text" })
  public token: string;

  @ManyToOne(() => UserRole, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: false,
  })
  @JoinColumn({ name: "roleId" })
  public role: UserRole;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}

export default ExpiredToken;
