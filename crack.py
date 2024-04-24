from scapy.all import *

def extract_handshake(pcap_file):
    handshake_frames = []
    pkts = rdpcap(pcap_file)
    for pkt in pkts:
        if pkt.haslayer(EAPOL):
            handshake_frames.append(pkt)
            if len(handshake_frames) == 4:
                break
    return handshake_frames

handshake_frames = extract_handshake("captured_handshake.pcap")

wrpcap("handshake_frames.pcap", handshake_frames)