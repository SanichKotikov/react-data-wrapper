import React from 'react';

import condition, {IState} from './condition';

interface IProps {
	isEmpty?: boolean;
	state: Readonly<IState>;
	loading: React.ReactElement;
	failure: React.ReactElement;
	empty?: React.ReactElement;
	children: React.ReactElement;
	onReload: () => Promise<void>;
}

export default React.memo<IProps>(function ControlledDataWrapper({
	isEmpty,
	state,
	loading,
	failure,
	empty,
	children,
}) {
	return condition(state, loading, failure, children, isEmpty, empty);
});
