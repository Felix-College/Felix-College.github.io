#### **Definitions**
_Attacker_ - Organizes medium of attack  
_Botnet_ - Utalized to carry out DDOS attack  
_Firewall_ - Blocks webserver traffic when necessary  
_Intrusion Detection System_ - Analyzes incoming webservertraffic, post firewall, scanning for abornmalities  
_Webserver_ - Centeral location of organization services. In this case the location of help desk  

#### **DDOS Attack Diagram**  
```Mermaid
sequenceDiagram
  participant A as Attacker
  participant B as Botnet
  participant C as Firewall
  participant D as Intrusion Detection System
  participant E as Webserver

A->>B: Signal to Botnet to begin attack
B->>E: Botnet begins to overload Webserver help desk
D-->C: Abnormal requests detected through Firewall
D->>C: Signal is sent to Firewall to block specific source of anomaly
B->>C: Botnet IP's are blocked from sending help requests
```  
#### **Description of Attack Sequence**
1. Attacker signals to Botnet to begin attack 
2. Botnet begins to overload help center with requests slowing traffic for all users
3. IDS passivly analyzes traffic that makes it through firewall
4. IDS detects abnormal traffic and sends signal to firewall to block it
5. Botnet IP's are blocked from acessing webserver help desk
