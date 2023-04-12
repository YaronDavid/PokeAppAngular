export interface PokeList {
    count:    number;
    next:     null|string;
    previous: string|null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}
