import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1788208702708 implements MigrationInterface {
    name = 'Migration1788208702708'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "form_reply" DROP CONSTRAINT "FK_fea94c57373b044e194aa1313b0"`);
        await queryRunner.query(`ALTER TABLE "form_reply" ADD CONSTRAINT "FK_fea94c57373b044e194aa1313b0" FOREIGN KEY ("formId") REFERENCES "form"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "form_reply" DROP CONSTRAINT "FK_fea94c57373b044e194aa1313b0"`);
        await queryRunner.query(`ALTER TABLE "form_reply" ADD CONSTRAINT "FK_fea94c57373b044e194aa1313b0" FOREIGN KEY ("formId") REFERENCES "form"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
