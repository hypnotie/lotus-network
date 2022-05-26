import s from "./Paginator.module.css";
import { useEffect, useState } from "react";

const Paginator = ({ totalItemsCount, pageSize, portionSize = 10, currentPage, onPageChanged }) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;

	useEffect(() => setPortionNumber(Math.ceil(currentPage / portionSize)), [currentPage]);

	return (
		<div className={s.pagination}>
			{portionNumber > 1 &&
				<svg viewBox="0 0 24 24" width="30" height="30" className={s.back}>
					<a onClick={() => { setPortionNumber(portionNumber - 1) }}
						onMouseDown={(e) => { e.preventDefault(); }}
					>
						<path d="M13.29,18.59,7.71,13a1,1,0,0,1,0-1.41L13.29,6A1,1,0,0,1,15,6.71V17.88A1,1,0,0,1,13.29,18.59Z" />
					</a>
				</svg>
			}
			<div className={s.paginationBody}>
				<div
					className={currentPage === pages[0] && s.selectedPage}
					onClick={() => { onPageChanged(pages[0]); setPortionNumber(1) }}>{pages[0]}
				</div>
				{portionNumber !== 1 &&
					<div className={s.dots}>...</div>
				}
				{pages
					.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					.map(p => {
						return (
							<>
								{p > 1 && p < pages.length &&
									<div
										className={currentPage === p && s.selectedPage}
										onClick={() => { onPageChanged(p); }}
										key={p}>{p}
									</div>
								}
							</>
						)
					})}
				{portionNumber !== portionCount &&
					<div className={s.dots}>...</div>
				}
				<div
					className={currentPage === pages.length && s.selectedPage}
					onClick={() => { onPageChanged(pages.length); setPortionNumber(portionCount) }}>{pages.length}
				</div>
			</div>
			{portionCount > portionNumber &&
				<svg viewBox="0 0 24 24" width="30" height="30" className={s.next}>
					<a
						onClick={() => { setPortionNumber(portionNumber + 1) }}
						onMouseDown={(e) => { e.preventDefault(); }}
					>
						<path d="M9,17.88V6.71A1,1,0,0,1,10.71,6l5.58,5.59a1,1,0,0,1,0,1.41l-5.58,5.59A1,1,0,0,1,9,17.88Z" />
					</a>
				</svg>
			}
		</div >
	)
};

export default Paginator;