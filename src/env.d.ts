/// <reference types="vite/client" />

interface ImportMetaEnv {          
    readonly APP_BASE_URI:string;
    readonly GOOG_CLIENT_ID:string;    
    readonly GOOG_CLIENT_SECRET:string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
