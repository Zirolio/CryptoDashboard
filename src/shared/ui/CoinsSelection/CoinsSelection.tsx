import { useCoins } from "@entities/coins/model/useCoins";
import type { CoinSelectionProps } from "./CoinsSelection.interface";
import { useLayoutEffect, useRef, useState } from "react";
import { useDebounce } from "@/shared/hooks/useDebounce";
import cx from "classix";
import styles from "./CoinsSelection.module.scss";

export default function CoinsSelection({ className, defaultValue, onCoinChange, ...props }: CoinSelectionProps) {
    const selectionRef = useRef<HTMLDivElement | null>(null);
    const selectionBtnRef = useRef<HTMLButtonElement | null>(null);
    
    const { data: coins = [] } = useCoins();

    const [opened, setOpened] = useState(false);
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState<string>(defaultValue);

    const debouncedQuery = useDebounce(query, 300);

    const selectedCoin = coins.find(c => c.id === selected);
    const filteredOptions = coins.filter((c) =>
        c.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    useLayoutEffect(() => {
        if (!opened) return;
        if (!selectionRef.current || !selectionBtnRef.current) return;
        
        const el = selectionRef.current;
        const rect = el.getBoundingClientRect();
        const isLeft = window.innerWidth - rect.right < 0;

        el.classList.remove(styles.left);
        el.classList.remove(styles.right);
        el.classList.add(isLeft ? styles.left : styles.right);
        el.style.transform = `translateX(${isLeft ? "" : "-"}${selectionBtnRef.current.getBoundingClientRect().width}px)`;
    }, [opened]);

    return (
        <div className={cx(styles.container, className)} { ...props }>
            <button ref={selectionBtnRef} onClick={() => setOpened(!opened)} className={styles.selectionBtn}>
                { selectedCoin ? selectedCoin.name : "Select" }
            </button>
            { opened && <div ref={selectionRef} className={cx(styles.selectionContainer)}>
                <input
                    className={styles.search}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                />
                <div className={styles.optionsListWallaper}>
                    <div className={styles.optionsList}>
                        { filteredOptions?.map(c =>
                            <div
                                className={styles.option}
                                onClick={() => {
                                    setSelected(c.id);
                                    setOpened(false);
                                    setQuery("");
                                    if (onCoinChange) onCoinChange(c.id);
                                }}
                                key={c.id}>
                                <img src={c.image} />
                                { c.name }
                            </div>
                        ) }
                    </div>
                    {/* <div className={styles.fadeBottom}></div> */}
                </div>
            </div> }
        </div>
    );

}