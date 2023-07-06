import { useCallback, useEffect, useRef, useState } from 'react';

export function useForceUpdate(): () => void {
	const [, setValue] = useState<undefined[]>([]);
	const forceUpdateRef = useRef<(() => void) | undefined>(() => setValue([]));

	useEffect(
		() => () => { forceUpdateRef.current = undefined; },
		[forceUpdateRef]
	);

	return useCallback(
		() => forceUpdateRef.current?.(),
		[forceUpdateRef]
	);
}
