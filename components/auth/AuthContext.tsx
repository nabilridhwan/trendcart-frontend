import { createContext, useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthAPIService } from "@/services/auth/auth-api-service";
import { clearToken } from "@/utils/token-utils";
import { LoginBody } from "@/types/services/auth";

interface AuthContextType {
  isLoggedIn: boolean;
  user: any; // Adjust according to your user model
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const queryClient = useQueryClient();

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const {
    data: user,
    isSuccess: userDataIsSuccess,
    isError,
    status,
  } = useQuery({
    queryKey: ["user", "self"],
    queryFn: AuthAPIService.getSelf,
    staleTime: Infinity,
    initialData: () => {
      return undefined;
    },
  });

  const loginMutation = useMutation({
    mutationFn: async ({ tiktok_access_token }: LoginBody) => {
      await AuthAPIService.login({ tiktok_access_token });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user", "self"],
        exact: true,
      });
      setIsLoggedIn(true);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      clearToken();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user", "self"],
        exact: true,
      });

      setIsLoggedIn(false);
    },
  });

  const login = async (tiktok_access_token: string) => {
    await loginMutation.mutateAsync({ tiktok_access_token });
  };

  const logout = async () => {
    await logoutMutation.mutateAsync();
  };

  useEffect(() => {
    console.log(`[AuthContext/USER]: ${user}`);
    console.log(`[AuthContext/IS LOGGED IN]: ${isLoggedIn}`);
    console.log(`[AuthContext/IS ERROR]: ${isError}`);
    if (userDataIsSuccess) {
      setIsLoggedIn(true);
    } else if (isError) {
      setIsLoggedIn(false);
    }
  }, [userDataIsSuccess, user, isError, status]);

  return { isLoggedIn, user, login, logout };
};

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
