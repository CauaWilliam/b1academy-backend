
export enum WhitelabelEnum{
    B1BANK = 'B1BANK',
    WhiteLabel = 'WhiteLabel'
}


export interface userCreateInterface{
    id: string;
    name: string;
    email: string;
    password: string;
    qtdTreinamentos: number;
    whitelabel: WhitelabelEnum;

    
    created_at: Date;
}