package main;

//import java.util.Scanner;
import java.util.Stack;

public class LISP_Validation {

	public static void main(String[] args) {
//		Scanner input = new Scanner(System.in);
//		System.out.println("Please enter string of parentheses: ");
//		String LISPstr = input.next();
//		input.close();
		
		String LISPstr = "(()(()((a(d()czx)dsa)))";
		Stack<Character> s = new Stack<Character>();
		
		for (char c : LISPstr.toCharArray()) {
			//Ignore characters that are not parentheses.
			if (c != '(' && c!= ')')
				continue;

			//If opened brackets, push to stack
			if (c == '(') s.push(c);
			
			//Else, check if top of stack pairs with current character.
			else {
				if (s.empty() || s.peek() != '(') {
					System.out.println("Not a valid string.");
					return;
				}
				else
					s.pop();
			}
		}
		
		//Stack should be empty if there was equal closing parentheses.
		if (s.empty())
			System.out.println("Input is a valid LISP string.");
		else
			System.out.println("Input is NOT a valid LISP string.");
	}

}
