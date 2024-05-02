import time
import threading # Import this to enable running 2 or more functions simultaneously (related to multi-threading)
us_states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]

stop = False

def timer(t):
    while t and not stop:
        minutes, seconds = divmod(t, 60)
        display = '{:02d}:{:02d}'.format(minutes, seconds)
        print('\t\t\t{:>8}'.format(display), end='\r')  # Fixed-width string to ensure display stays still. 
                                                        #The countdown display occupies 8 characters, padding it with spaces if necessary. 
        time.sleep(1)
        t-=1


def main():
    global stop
    count = 0
    t = 180
    timer_thread = threading.Thread(target=timer, args=(t,)) #Initialize threading so that timer function 
                                                            # runs simultaneously with main
    timer_thread.start()
    print('Name a US state: ')
    while True:
        n = input()
        if n not in us_states:
            print('You lose' + '    Score: ' + str(count))
            stop = True
            break
        else:
            count+=1
        if count == len(us_states):
            print('You win!')
            stop = True
            break
    
if __name__ == "__main__":
    main()
