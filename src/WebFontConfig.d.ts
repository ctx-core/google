export interface WebFontConfig {
    loading?: () => void;
    active?: () => void;
    inactive?: () => void;
    fontloading?: (familyName: string, fvd: string) => void;
    fontactive?: (familyName: string, fvd: string) => void;
    fontinactive?: (familyName: string, fvd: string) => void;
    timeout?: number;
    classes?: boolean;
    events?: boolean;
    custom?: {
        families?: string[];
        urls?: string[];
        testStrings?: Record<string, string>;
    };
    fontdeck?: {
        id: string;
    };
    google?: {
        families: string[];
    };
    monotype?: {
        projectId: string;
        version?: number;
        loadAllFonts?: boolean;
    };
    typekit?: {
        id: string;
        api?: string;
    };
}
