import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1787871225031 implements MigrationInterface {
  name = 'Migration1787871225031';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "form_theme" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "primaryColor" character varying NOT NULL, "secondaryColor" character varying, "font" character varying, "ctaText" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_9a2dff8ce3c1665c808ec2db572" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'user')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."user_role_enum" NOT NULL DEFAULT 'user', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "form_reply" ("id" SERIAL NOT NULL, "ipHash" character varying NOT NULL, "replies" jsonb NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "formId" integer, CONSTRAINT "PK_d67abd5b8cc79d80eb22e7dbfdf" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "form" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying, "fields" jsonb NOT NULL, "isPrivate" boolean NOT NULL, "isClosed" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "formThemeId" integer, CONSTRAINT "PK_8f72b95aa2f8ba82cf95dc7579e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "form_theme" ADD CONSTRAINT "FK_62de4c0b3240f184e654d8619cc" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "form_reply" ADD CONSTRAINT "FK_fea94c57373b044e194aa1313b0" FOREIGN KEY ("formId") REFERENCES "form"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "form" ADD CONSTRAINT "FK_f91337a182c92d0af3fd648d63e" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "form" ADD CONSTRAINT "FK_9a63e3a25fdf768d27b5bee33fa" FOREIGN KEY ("formThemeId") REFERENCES "form_theme"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "form" DROP CONSTRAINT "FK_9a63e3a25fdf768d27b5bee33fa"`,
    );
    await queryRunner.query(
      `ALTER TABLE "form" DROP CONSTRAINT "FK_f91337a182c92d0af3fd648d63e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "form_reply" DROP CONSTRAINT "FK_fea94c57373b044e194aa1313b0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "form_theme" DROP CONSTRAINT "FK_62de4c0b3240f184e654d8619cc"`,
    );
    await queryRunner.query(`DROP TABLE "form"`);
    await queryRunner.query(`DROP TABLE "form_reply"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    await queryRunner.query(`DROP TABLE "form_theme"`);
  }
}
