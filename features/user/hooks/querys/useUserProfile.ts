import axiosServices from "@/lib/axios";
import ApiUrl from "@/lib/endpointApi";
import { QUERY_KEYS } from "@/lib/keys";
import { useQuery } from "@tanstack/react-query";

export interface UserProfile {
  id: number;
  fullName: string;
  vatarUrl: string;
  createdAt: string;
}
const getUserProfile = async (accountId: number): Promise<UserProfile> => {
  const response = await axiosServices.get<UserProfile>(ApiUrl.user.profile, {
    params: { accountId },
  });
  return response.data;
};

const useUserProfile = (accountId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.USERS.INFO, accountId],
    queryFn: () => getUserProfile(accountId),
    enabled: !!accountId, // Only run the query if accountId is defined
  });
};
export default useUserProfile;
