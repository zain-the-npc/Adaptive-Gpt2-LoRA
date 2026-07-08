

# Adaptive GPT-2 LoRA    
( built to understand Low Rank Adaptation (LoRA) mechanics )


Hand-written LoRA implementation — no `peft`. Trains 5 independent LoRA adapters on GPT-2, each swappable at inference without reloading the base model.

## ( built to understand Low Rank Adaptation (LoRA) mechanics )

**Live demo (frontend):** https://adaptive-gpt2-lo-ra.vercel.app
**Live demo (backend, Gradio):** https://huggingface.co/spaces/zain-the-npc/adaptive-gpt2-lora

## Why this exists

Most LoRA projects call `peft.get_peft_model()` and stop there. This implements the math directly — frozen weight `W`, trainable low-rank matrices `A` and `B`, computing:

```
y = Wx + (alpha/r) * B(Ax)
```

manually, injected into GPT-2's `Conv1D` attention layers (`lora/lora_linear.py`, `lora/gpt2_lora.py`). Verified correct before training: adapter output equals base model output at initialization, since `B` is zero-initialized — confirms the math before trusting any results.

## Why GPT-2

Trained locally on an RTX 3050 (6GB VRAM). GPT-2 small (124M params) is one of the largest models that fits full fine-tuning experimentation — including gradients for the adapters, optimizer state, and activations — inside that budget without quantization. This is a learning project for understanding LoRA at the weight level, not a claim of production-scale fine-tuning.

## Why 5 adapters

One base model, five independently trained LoRA adapters (Pirate, Shakespearean, Sarcastic Gen-Z, Motivational Coach, Noir Detective) — each ~295K trainable parameters (~0.24% of GPT-2's 124M). This demonstrates the actual value of LoRA in production: a single frozen base model can serve many task/style-specific behaviors by swapping a few MB of adapter weights, instead of storing or reloading separate fine-tuned models.

## Results

| Persona | Training loss | Sample output (prompt: "hi") |
|---|---|---|
| Pirate | 2.35 -> 0.87 | "hi sire! I hear the rumble of hooves and the drum beat of iron against the metal..." |
| Shakespearean | 2.50 -> 0.53 | "hi, I am the light that shines in the dark, my life is a tale of sorrow and poverty..." |
| Sarcastic Gen-Z | 2.44 -> 1.42 | "hi, but you're telling me there's no need to be a leader in my life because I wear an outfit..." |
| Motivational Coach | 1.45 -> 0.67 | "hi to you. It is not easy to fall asleep every day. Your focus is on getting back to work..." |
| Noir Detective | 2.42 -> 0.55 | "hi on a rainy night in the city. The driver had parked his car in front of my desk..." |

## Project structure

```
lora-personas/
├── lora/
│   ├── lora_linear.py     # generic LoRA linear layer, from scratch
│   └── gpt2_lora.py       # GPT-2 specific — handles Conv1D weight layout
├── data/                   # training datasets, one per persona (~250 lines each)
├── adapters/                # trained adapter weights, .pt (not tracked in git)
├── train.py                  # training script, one persona per run
├── compare.py                 # base vs fine-tuned output comparison
├── app.py                      # Gradio backend, deployed to HF Spaces
└── frontend/                    # Next.js frontend, deployed to Vercel
```

## Run it

```
pip install torch transformers gradio
python train.py       # edit DATA_PATH/OUTPUT_PATH per persona
python app.py          # launches local Gradio demo
```

## Notes

Hand-written LoRA math, verified before training, applied to a real (if small) pretrained model, with a working deployed demo — built to understand fine-tuning mechanics directly rather than through a library abstraction.
