import ButtonBase from "@/components/button/ButtonBase";
import {
  createTestCrudServerAction,
  getAllTestCrud,
} from "@/serverActions/testCrud";

export default async function Admin() {
  const testCrudRecords = await getAllTestCrud();
  return (
    <div className="bg-red-500">
      <h1>TEST CRUD</h1>
      <div>
        <ButtonBase>cccccccc</ButtonBase>
      </div>
      <div>
        <form
          action={createTestCrudServerAction}
          className="bg-yellow-400 p-4 flex flex-col gap-4"
        >
          <input type="text" name="name" className="bg-white" />
          <input type="text" name="value" className="bg-white" />
          <button type="submit" className="border border-b-blue-400">
            Create
          </button>
        </form>
      </div>
      <div>
        {testCrudRecords.map((record) => (
          <div key={record.UID} className="p-4 border-b">
            <h3 className="text-lg font-semibold">{record.name}</h3>
            <p>Value: {record.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
