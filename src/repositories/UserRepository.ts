import { connectDatabase } from "../database"
import { UserSelectDto } from "../domain";

class UserRepository {

  async findById(id: number): Promise<UserSelectDto> {
    const connection = await connectDatabase();
    const stmt = `
      SELECT
        id,
        name,
        email,
        password,
        created,
        updated
      FROM
        users
      WHERE
        id = ?
    `;
    const rows = await connection.execute(stmt, [id]);
    await connection.end();

    return rows[0] as unknown as UserSelectDto;
  }
}

export default UserRepository;
