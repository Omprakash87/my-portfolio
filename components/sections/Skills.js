export default function Skills() {
  const skills = [
    "C programming", 
    "C++ programming", 
    "Python", 
    "Assembly language", 
    "Microcontroller knowledge (ARM Cortex, AVR, PIC, ESP32, Raspberry Pi)", 
    "RTOS (FreeRTOS, Zephyr, VxWorks)", 
    "Embedded Linux (Yocto, Buildroot, Kernel development)", 
    "Serial communication protocols (UART, SPI, I2C)", 
    "Network protocols (TCP/IP, MQTT, HTTP)", 
    "Industrial protocols (CAN, Modbus, PROFIBUS)", 
    "Circuit design and schematics", 
    "Working with sensors and actuators", 
    "PCB design (Altium, KiCad, Eagle)", 
    "Power management (DC/DC converters, LDOs)", 
    "Debugging tools (JTAG, SWD, GDB)", 
    "Oscilloscope and logic analyzer", 
    "Unit testing (Google Test, Ceedling)", 
    "Firmware validation", 
    "Interrupt handling", 
    "Low-power design", 
    "Bootloader development", 
    "OTA firmware updates", 
    "IoT and wireless technologies (Wi-Fi, Bluetooth, Zigbee, LoRa, NFC, RFID, 5G, LTE, NB-IoT, LoRaWAN)", 
    "Version control (Git/GitHub/GitLab)", 
    "Build systems (CMake, Makefile)", 
    "CI/CD for firmware deployment", 
    "Problem-solving", 
    "Analytical thinking", 
    "Attention to detail", 
    "Teamwork and collaboration", 
    "Documentation and reporting", 
    "Embedded cybersecurity (Secure Boot, Encryption)", 
    "Machine learning on embedded systems (TinyML)", 
    "FPGA and DSP basics"
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">{skill}</div>
        ))}
      </div>
    </section>
  );
}
