# Algorima
## Flowchart Menghitung Luas dan Keliling Lingkaran

Algoritma ini adalah untuk menghitung Luas dan Keliling dengan flowchart

```mermaid

flowchart TD
    A@{ shape: circle, label: "Start" }
    
    B@{ shape: lean-r, label: "r" }
    C@{ shape: rect, label: "phi = 3.14" }
    D@{ shape: rect, label: "L = phi * r * r" }
    E@{ shape: rect, label: "K = 2 * phi * r" }
    F@{ shape: lean-r, label: '"{L}"' }
    G@{ shape: lean-r, label: '"{K}"' }
    H@{ shape: dbl-circ, label: "Stop" }

    A-->B-->C-->D-->E-->F-->G-->H
    




```