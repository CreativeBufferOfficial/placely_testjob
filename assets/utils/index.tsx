import classnames, { Argument } from 'classnames';
import { ROOT_CX } from '../constants';


export const cx = (className: string, ...args: Argument[]) => {
	const specificClassName = `${ROOT_CX}${className}`;

	return args
		? classnames(specificClassName, ...args)
		: classnames(specificClassName);
};