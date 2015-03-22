package App;

import javax.swing.*;

public class SaverApp {
	public static void main(String args[]){
		
	
	JFrame frame = new JFrame();
	frame.setSize(400, 200);
	JButton button = new JButton("Enter");
	JPanel panel1 = new JPanel();  // create the panel
    panel1.add(button);  // add the button to the panel
    frame.add(panel1);  // add the panel to the frame
	
	
	
	button.setVisible(true);
	
	frame.setVisible(true);
	
	
	
	
	}
	

}
