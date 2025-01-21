package dump;
import java.util.Scanner;

public class index
{
    public static void main(String[] args)
    {
        Scanner get_input = new Scanner (System.in);
        
        System.out.println("Please enter your yearly pay : ");
        float pay = get_input.nextFloat();

        float monthly = pay / 12;
        System.out.println("Your monthly pay is " + monthly);

        
        
        get_input.close();
    }
}