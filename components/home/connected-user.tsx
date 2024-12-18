import LocationContext from "@/context/location-context";
import { Mail, Timer, UserCheck } from "lucide-react";
import { useContext } from "react";
import TimeDifference from "../time-difference";

export default function ConnectedUser() {
  const { hostRooom } = useContext(LocationContext);

  return (
    <div className="bg-green-100 dark:bg-green-800 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-2 text-green-800 dark:text-green-100">
        Connected Users
      </h2>
      {hostRooom && hostRooom?.totalConnectedUsers?.length > 0 ? (
        <ul className="space-y-4">
          {hostRooom.totalConnectedUsers.map((user) => (
            <li
              key={user.userId}
              className="bg-white dark:bg-gray-700 p-3 rounded-md shadow-sm"
            >
              <div className="flex items-center justify-between text-green-700 dark:text-green-200 mb-2">
                <div className="flex items-center">
                  <UserCheck className="h-5 w-5 mr-2" />
                  {user.userName}
                </div>
              </div>

              <div className="text-sm  mt-1 text-gray-500">
                <Mail className="h-4 w-4 inline mr-2" />
                {user.userEmail}
              </div>
              <div className="text-sm  mt-1 text-gray-500">
                <Timer className="h-4 w-4 inline mr-2" />
                <TimeDifference joinedTime={user.joinAt} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-green-600 dark:text-green-300">No users connected</p>
      )}
    </div>
  );
}
