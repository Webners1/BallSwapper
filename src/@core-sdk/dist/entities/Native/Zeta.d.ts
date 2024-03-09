import { Currency } from '../Currency';
import { NativeCurrency } from '../NativeCurrency';
import { Token } from '../Token';
export declare class Zeta extends NativeCurrency {
    protected constructor(chainId: number);
    get wrapped(): Token;
    private static _cache;
    static onChain(chainId: number): Zeta;
    equals(other: Currency): boolean;
}
