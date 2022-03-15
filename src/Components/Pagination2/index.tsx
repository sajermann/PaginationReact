import { useEffect } from 'react';
import LocateCenterNumber from '../../Utils/LocateCenterNumber';
import MountButton from '../../Utils/MountButton';
import SiblingMajor from '../../Utils/SiblingMajor';
import SiblingMinor from '../../Utils/SiblingMinor';
import { useMyContext } from '../../Context';
import MountArrowButton from '../../Utils/MountArrowButton';
import './index.css';

type Props = {
	totalPages: number;
	currentPage: number;
	siblingCount: number;
	onChange: (data: number) => void;
};

export default function Pagination2({
	totalPages,
	currentPage,
	onChange,
	siblingCount,
}: Props) {
	const {
		currentPageInternal,
		setCurrentPageInternal,
		totalPagesInternal,
		setTotalPagesInternal,
		siblingCountInternal,
		setSiblingCountInternal,
		siblingMinorInternal,
		setSiblingMinorInternal,
		siblingMajorInternal,
		setSiblingMajorInternal,
		centralNumberInternal,
		setCentralNumberInternal,
	} = useMyContext();
	useEffect(() => setCurrentPageInternal(currentPage), [currentPage]);
	useEffect(() => setTotalPagesInternal(totalPages), [totalPages]);
	useEffect(() => setSiblingCountInternal(siblingCount), [siblingCount]);
	useEffect(() => setSiblingCountInternal(siblingCount), [siblingCount]);

	useEffect(() => {
		setCentralNumberInternal(
			LocateCenterNumber({
				currentPage: currentPageInternal,
				totalPages: totalPagesInternal,
				siblingCount: siblingCountInternal,
			})
		);
	}, [currentPageInternal, totalPagesInternal, siblingCountInternal]);

	useEffect(() => {
		setSiblingMinorInternal(
			SiblingMinor({
				currentPage: centralNumberInternal,
				siblingCount: siblingCountInternal,
			})
		);
	}, [centralNumberInternal, siblingCountInternal]);

	useEffect(() => {
		setSiblingMajorInternal(
			SiblingMajor({
				currentPage: centralNumberInternal,
				siblingCount: siblingCountInternal,
				totalPages: totalPagesInternal,
			})
		);
	}, [centralNumberInternal, siblingCountInternal, totalPagesInternal]);

	useEffect(() => {
		if (siblingCountInternal > totalPages) setSiblingCountInternal(0);
	}, [siblingCount, totalPages]);

	function decrease() {
		if (currentPageInternal === 1) return;
		onChange(currentPageInternal - 1);
	}

	function increase() {
		if (currentPageInternal === totalPagesInternal) return;
		onChange(currentPageInternal + 1);
	}

	return (
		<div className="containerInfos">
			<table className="tableContainer">
				<thead>
					<th>Details</th>
					<th>Prev</th>
					<th>First Page</th>
					<th>Siblings Minor</th>
					<th>Central Number</th>
					<th>Siblings Major</th>
					<th>Last Page</th>
					<th>Next</th>
				</thead>
				<tbody>
					<tr>
						<td>Result</td>
						<td>⬅️</td>
						<td>1</td>
						<td>[{siblingMinorInternal.join(', ')}]</td>
						<td>
							{LocateCenterNumber({ currentPage, siblingCount, totalPages })}
						</td>
						<td>[{siblingMajorInternal.join(', ')}]</td>
						<td>{totalPagesInternal}</td>
						<td>➡️</td>
					</tr>
					<tr>
						<td>Render</td>
						<td>
							<MountArrowButton
								onClick={decrease}
								icon="⬅️"
								disabled={currentPage === 1}
							/>
						</td>
						<td>
							<MountButton
								data={[1]}
								type="FirstPage"
								currentPage={currentPageInternal}
								onChange={onChange}
							/>
						</td>
						<td>
							<MountButton
								data={siblingMinorInternal}
								type="Minor"
								currentPage={currentPageInternal}
								onChange={onChange}
							/>
						</td>
						<td>
							<MountButton
								data={[
									LocateCenterNumber({
										currentPage,
										siblingCount,
										totalPages,
									}),
								]}
								type="CentralNumber"
								currentPage={currentPageInternal}
								onChange={onChange}
							/>
						</td>
						<td>
							<MountButton
								data={siblingMajorInternal}
								type="Major"
								currentPage={currentPageInternal}
								onChange={onChange}
							/>
						</td>
						<td>
							<MountButton
								data={[totalPagesInternal]}
								type="LastPage"
								currentPage={currentPageInternal}
								onChange={onChange}
							/>
						</td>
						<td>
							<MountArrowButton
								onClick={increase}
								icon="➡️"
								disabled={currentPage === totalPages}
							/>
						</td>
					</tr>
				</tbody>
			</table>

			<div className="block">
				<div className="category">
					<h1>Current Page</h1>
				</div>
				<div className="descriptionNumber">
					<h2>{currentPageInternal}</h2>
				</div>
				<div className="demoButton">
					<h3>
						<MountButton
							data={[currentPageInternal]}
							type=""
							currentPage={currentPageInternal}
							onChange={onChange}
						/>
					</h3>
				</div>
			</div>

			<div className="block">
				<div className="category">
					<h1>Total Pages</h1>
				</div>
				<div className="descriptionNumber">
					<h2>{totalPagesInternal}</h2>
				</div>
				<div className="demoButton"> </div>
			</div>

			<div className="block">
				<div className="category">
					<h1>Siblings</h1>
				</div>
				<div className="descriptionNumber">
					<h2>{siblingCountInternal}</h2>
				</div>
				<div className="demoButton"> </div>
			</div>

			<div className="containerPagination">
				<MountArrowButton
					onClick={decrease}
					icon="⬅️"
					disabled={currentPage === 1}
				/>
				<MountButton
					data={[1]}
					type="FirstPage"
					currentPage={currentPageInternal}
					onChange={onChange}
				/>
				<MountButton
					data={siblingMinorInternal}
					type="Minor"
					currentPage={currentPageInternal}
					onChange={onChange}
				/>
				<MountButton
					data={[
						LocateCenterNumber({
							currentPage,
							siblingCount,
							totalPages,
						}),
					]}
					type="CentralNumber"
					currentPage={currentPageInternal}
					onChange={onChange}
				/>
				<MountButton
					data={siblingMajorInternal}
					type="Major"
					currentPage={currentPageInternal}
					onChange={onChange}
				/>
				<MountButton
					data={[totalPagesInternal]}
					type="LastPage"
					currentPage={currentPageInternal}
					onChange={onChange}
				/>
				<MountArrowButton
					onClick={increase}
					icon="➡️"
					disabled={currentPage === totalPages}
				/>
			</div>
		</div>
	);
}
