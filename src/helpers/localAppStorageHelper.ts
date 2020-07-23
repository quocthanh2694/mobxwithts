
enum LocalStorageKeyEnum {
    accessToken = 'AT',
    fcmToken = 'FT',
    account = 'A',
}

class LocalAppStorageHelper {

    private async set(key: LocalStorageKeyEnum, value: any) {
        await localStorage.setItem(key, JSON.stringify(value));
    }

    private async get(key: LocalStorageKeyEnum) {
        const value = await localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        } else {
            return null;
        }
    }

    async delete(key: LocalStorageKeyEnum) {
        await localStorage.removeItem(key);
    }

    async clear() {
        for (let key in LocalStorageKeyEnum) {
            await localStorage.removeItem((LocalStorageKeyEnum as any)[key]);
        }
    }


    async getAccessToken(): Promise<string> {
        return await this.get(LocalStorageKeyEnum.accessToken);
    }

    async setAccessToken(accessToken: string) {
        await this.set(LocalStorageKeyEnum.accessToken, accessToken);
    }

    async getAccount(): Promise<Account> {
        return await this.get(LocalStorageKeyEnum.account);
    }

    async setAccount(account: Account) {
        await this.set(LocalStorageKeyEnum.account, account);
    }

}

export const localAppStorageHelper = new LocalAppStorageHelper();