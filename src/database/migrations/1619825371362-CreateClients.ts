import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClients1619825371362 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "teachers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "disciplina",
                        type: "varchar"
                    },
                    {
                        name: "professor",
                        type: "varchar"
                    },
                    {
                        name: "diasemana",
                        type: "varchar"
                    },
                    {
                        name: "periodo",
                        type: "varchar"
                    },
                    {
                        name: "horario",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("teachers")
    }

}
