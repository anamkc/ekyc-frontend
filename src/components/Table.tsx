import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export type UserDataProps = {
  id: number;
  name: string;
  verificationstatus: boolean;
};
const Table = ({ userdata }: { userdata: UserDataProps[] }) => {
  const router = useRouter();
  console.log(userdata);
  const handleClick = (id: number) => {
    router.push(`/users/${encodeURIComponent(id)}`);
  };
  return (
    <div className="w-full p-4">
      <div className="bg-white shadow-md rounded-md overflow-x-auto">
        <table className="min-w-full h-max">
          <thead>
            <tr className="bg-gray-50">
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Verification Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userdata.map((user: any) => {
              return (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                    {user.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {user.verificationstatus ? (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 text-center">
                        Verified
                      </span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 text-center">
                        Not Verified
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <Link
                      href={`/admin/dashboard/${encodeURIComponent(user.id)}`}
                    >
                      <div className=" cursor_pointer inline-flex px-6 w-[40%] text-sm text-black bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] py-3  rounded-3xl  justify-center ">
                        view details
                      </div>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
