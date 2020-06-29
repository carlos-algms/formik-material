import { useCallback } from 'react';
import type { OnSubmitFormCallback } from './Form';

/**
 * Proxy to useCallback that returns a typed callback.
 * Use this function to avoid import Interfaces
 * and manually type the callback passed to the Form Component
 */
function useFormSubmit<T = any, CB = OnSubmitFormCallback<T>>(cb: CB, deps: any[]): CB {
	const callback = useCallback(cb as any, deps);
	return callback as any;
}

export default useFormSubmit;
