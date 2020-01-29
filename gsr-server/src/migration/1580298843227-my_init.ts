import {MigrationInterface, QueryRunner} from 'typeorm';

export class myInit1580298843227 implements MigrationInterface {
    name = 'myInit1580298843227'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "mission" ("id" SERIAL NOT NULL, "title" character varying(50) NOT NULL, "reward" integer NOT NULL, "active" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL, "createdBy" character varying NOT NULL, "isDeleted" boolean NOT NULL, CONSTRAINT "PK_54f1391034bc7dd30666dee0d4c" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "mission"`, undefined);
    }

}
