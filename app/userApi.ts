import auth from '@react-native-firebase/auth';
import { Unsubscribe } from 'firebase/firestore';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export interface IUser {}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        loginUser: builder.query<IUser, any>({
            providesTags: ['User'],
            queryFn(_: any = {}) {
                return { data: {} };
            },
            async onCacheEntryAdded(
                _: any = {},
                { cacheDataLoaded, updateCachedData, cacheEntryRemoved }
            ) {
                let unsubscribe: Unsubscribe | undefined;
                let error;
                await cacheDataLoaded;

                try {
                    unsubscribe = auth().onAuthStateChanged((userData) => {
                        if (userData) {
                            updateCachedData((draft) => {
                                console.log(userData);
                                return {
                                    data: {
                                        name: userData.displayName,
                                        email: userData.email,
                                        uid: userData.uid
                                    }
                                };
                            });
                        } else {
                            //when logging out
                            return {data: {}};
                        }
                    });
                } catch (err: any) {
                    error = err.message;
                }

                if (error) {
                    return error;
                }

                await cacheEntryRemoved;
                unsubscribe && unsubscribe();
            }
        })
    })
});

export const { useLoginUserQuery } = userApi;
