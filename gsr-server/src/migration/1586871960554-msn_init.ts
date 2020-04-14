import {MigrationInterface, QueryRunner} from "typeorm";

// tslint:disable-next-line:class-name
export class msnInit1586871960554 implements MigrationInterface {
    name = 'msnInit1586871960554'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "mission" ("id" SERIAL NOT NULL, "title" character varying(50) NOT NULL, "reward" integer NOT NULL, "active" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL, "createdBy" character varying NOT NULL, "isDeleted" boolean NOT NULL, CONSTRAINT "PK_54f1391034bc7dd30666dee0d4c" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "active"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "createdAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "isDeleted"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD "active" boolean NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD "createdAt" TIMESTAMP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD "isDeleted" boolean NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD "isActive" boolean NOT NULL DEFAULT true`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD "isArchived" boolean NOT NULL DEFAULT false`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`, undefined);
        // tslint:disable-next-line:max-line-length
        await queryRunner.query(`ALTER TABLE "mission" ADD "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD "lastChangedBy" character varying(300) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD "internalComment" character varying(300)`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP CONSTRAINT "PK_54f1391034bc7dd30666dee0d4c"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD CONSTRAINT "PK_54f1391034bc7dd30666dee0d4c" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "createdBy"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD "createdBy" character varying(300) NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "createdBy"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD "createdBy" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP CONSTRAINT "PK_54f1391034bc7dd30666dee0d4c"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD CONSTRAINT "PK_54f1391034bc7dd30666dee0d4c" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "internalComment"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "lastChangedBy"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "lastChangedDateTime"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "createDateTime"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "isArchived"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "isActive"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "isDeleted"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "createdAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "active"`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD "isDeleted" boolean NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD "createdAt" TIMESTAMP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "mission" ADD "active" boolean NOT NULL`, undefined);
        await queryRunner.query(`DROP TABLE "mission"`, undefined);
    }

}
