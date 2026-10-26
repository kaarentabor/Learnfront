
<script setup>
import { ref, computed } from 'vue';

let modalOpen = ref(false);
let modal2Open = ref(false);

let answer = computed(() => {
    return modalOpen.value ? 'modal is-active' : 'modal';
});

let answer2 = computed(() => {
    return modal2Open.value ? 'modal is-active' : 'modal';
});
</script>

<template>
    <div class="container content mt-3">

        <button class="button is-primary" @click="modalOpen = true">
            Open Modal 1
        </button>

        <button class="button is-info" @click="modal2Open = true">
            Open Modal 2
        </button>

        <!-- First Modal -->
        <div :class="answer">
            <div class="modal-background" @click="modalOpen = false"></div>

            <div class="modal-content">
                <div class="box">
                    <h2>Modal 1</h2>
                    <p>This is the first modal.</p>
                    <button class="button is-danger" @click="modalOpen = false">
                        Close
                    </button>
                </div>
            </div>

            <button class="modal-close is-large"
                aria-label="close"
                @click="modalOpen = false">
            </button>
        </div>

        <!-- Second Modal -->
        <div :class="answer2">
            <div class="modal-background" @click="modal2Open = false"></div>

            <div class="modal-content">
                <div class="box">
                    <h2>Modal 2</h2>
                    <p>This is the second modal.</p>
                    <button class="button is-danger" @click="modal2Open = false">
                        Close
                    </button>
                </div>
            </div>

            <button class="modal-close is-large"
                aria-label="close"
                @click="modal2Open = false">
            </button>
        </div>

    </div>
</template>
