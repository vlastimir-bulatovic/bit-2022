// switch statement evaluates an expression 
// matching the expression's value against a series of case clauses 
// and executes statements after the first case clause with a matching value
// until a break statement is encountered. 
// The default clause of a switch statement will be jumped to if no case matches the expression's value.

var someCondition = 3;

switch (someCondition) {
	case 1:
		// will execute only if someCondition is 1

		// this keyword tell us to exit from this switch statement
		// if this code is executed and doesn't have break it will execute every code block bellow
		// until it reach keyword break
		break;
	case 2:
		break;
	case 3:
		break;

	default:
		// will be executed only if not a single case is true
		break;
}

