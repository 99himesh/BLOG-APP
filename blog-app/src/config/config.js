const config={
   appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
   appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECTID),
   appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASEID),
   appwriteColllectionId:String(import.meta.env.VITE_APPWRITE_COLLECTIONID),
   appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKETID),
};
export  default config;
